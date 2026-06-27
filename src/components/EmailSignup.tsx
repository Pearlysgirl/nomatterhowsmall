import { useState } from "react";
import { Mail, Send, Loader2, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { EmailSignupRequest, EmailSignupResponse } from "../types";

export default function EmailSignup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Client-side validation
    if (!firstName.trim()) {
      setError("First name is required.");
      return;
    }
    if (!lastName.trim()) {
      setError("Last name is required.");
      return;
    }
    if (!email.trim()) {
      setError("Email address is required.");
      return;
    }
    if (!agreedToTerms) {
      setError("Please agree to the terms and privacy policy.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const signupData: EmailSignupRequest = {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        agreedToTerms
      };

      const response = await fetch("/api/email-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signupData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to sign up. Please try again.");
      }

      const data: EmailSignupResponse = await response.json();

      // Success - show success state
      setIsSuccess(true);

      // Reset form
      setFirstName("");
      setLastName("");
      setEmail("");
      setAgreedToTerms(false);

      // Reset success state after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);

    } catch (err: any) {
      console.error("Email signup error:", err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-[800px] text-center">
      <div className="mb-8">
        <div className="mb-4 flex items-center justify-center gap-2">
          <Mail className="h-5 w-5 text-[#7ec8e3]" />
          <h2 className="text-sm font-black uppercase tracking-normal text-[#7ec8e3]">Stay Connected</h2>
        </div>
        <h3 className="text-3xl font-black leading-tight tracking-normal text-[#a8d8ea] md:text-4xl">
          Get updates and news
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-[#8ab4c2]">
          Be the first to know how your support is making a difference and get the latest updates.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mx-auto max-w-[500px] rounded-md border border-green-500/30 bg-green-500/10 p-6 text-center"
          >
            <CheckCircle className="mx-auto mb-3 h-12 w-12 text-green-400" />
            <h4 className="text-xl font-black text-[#a8d8ea]">You're signed up.</h4>
            <p className="mt-2 text-sm text-[#9ac4d0]">
              We'll be in touch with updates and news.
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <form onSubmit={handleSubmit} className="mx-auto max-w-[500px] space-y-4 text-left">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-[#7ec8e3] mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={50}
                    placeholder="Your first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full rounded-md border border-white/16 bg-white/[0.025] px-4 py-3 text-sm text-[#a8d8ea] placeholder-[#6a9aaa] transition focus:border-[#7ec8e3]/70 focus:bg-white/[0.045] focus:outline-none"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-[#7ec8e3] mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={50}
                    placeholder="Your last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full rounded-md border border-white/16 bg-white/[0.025] px-4 py-3 text-sm text-[#a8d8ea] placeholder-[#6a9aaa] transition focus:border-[#7ec8e3]/70 focus:bg-white/[0.045] focus:outline-none"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-[#7ec8e3] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  maxLength={254}
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md border border-white/16 bg-white/[0.025] px-4 py-3 text-sm text-[#a8d8ea] placeholder-[#6a9aaa] transition focus:border-[#7ec8e3]/70 focus:bg-white/[0.045] focus:outline-none"
                  disabled={isSubmitting}
                />
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  id="terms-checkbox"
                  required
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border border-white/16 bg-white/[0.025] text-[#7ec8e3] focus:ring-[#7ec8e3]/30 focus:ring-offset-0"
                  disabled={isSubmitting}
                />
                <label htmlFor="terms-checkbox" className="text-xs leading-relaxed text-[#9ac4d0]">
                  By signing up, I agree to receive emails about campaign updates. I can unsubscribe at any time.
                </label>
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-md border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-400"
                >
                  {error}
                </motion.div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-[#7ec8e3] px-6 py-3 text-sm font-black uppercase tracking-normal text-[#101513] transition hover:bg-[#a8d8ea] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Signing up...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Send className="h-4 w-4" />
                      Sign up for updates
                    </span>
                  )}
                </button>
              </div>

              <p className="pt-2 text-center text-xs text-[#6a9aaa]/75">
                We respect your privacy and will never sell or share your information with third parties.
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}