import { motion } from "framer-motion";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-48 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-foreground tracking-tight mb-6">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground font-sans mb-12">
              Last updated: January 2024
            </p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-serif font-medium text-foreground mb-4">
                  Your Privacy Matters
                </h2>
                <p className="text-muted-foreground font-sans leading-relaxed mb-4">
                  At trackifAI, we believe your data belongs to you. This policy explains how we collect, use, and protect your information when you use our platform.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-serif font-medium text-foreground mb-4">
                  Data Collection
                </h2>
                <p className="text-muted-foreground font-sans leading-relaxed mb-4">
                  We collect only the minimum data necessary to provide our services:
                </p>
                <ul className="list-disc list-inside text-muted-foreground font-sans space-y-2 ml-4">
                  <li>Website URLs you submit for analysis</li>
                  <li>Account information (email, name) if you create an account</li>
                  <li>Usage analytics to improve our service</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-serif font-medium text-foreground mb-4">
                  GDPR Compliance
                </h2>
                <p className="text-muted-foreground font-sans leading-relaxed mb-4">
                  We are fully compliant with the General Data Protection Regulation (GDPR). As a user, you have the right to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground font-sans space-y-2 ml-4">
                  <li>Access your personal data at any time</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data ("right to be forgotten")</li>
                  <li>Export your data in a portable format</li>
                  <li>Withdraw consent for data processing</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-serif font-medium text-foreground mb-4">
                  Secure Encrypted Storage
                </h2>
                <p className="text-muted-foreground font-sans leading-relaxed mb-4">
                  All data transmitted to and from trackifAI is encrypted using industry-standard TLS 1.3 encryption. Data at rest is protected with AES-256 encryption. We use secure, SOC 2 compliant infrastructure providers.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-serif font-medium text-foreground mb-4">
                  No-Sale Data Policy
                </h2>
                <p className="text-muted-foreground font-sans leading-relaxed mb-4">
                  <strong className="text-foreground">We will never sell your data.</strong> Your information is used solely to provide and improve our services. We do not share personal data with third parties for marketing purposes, and we never monetize your data through advertising.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-serif font-medium text-foreground mb-4">
                  Data Retention
                </h2>
                <p className="text-muted-foreground font-sans leading-relaxed mb-4">
                  Website content analyzed during audits is processed in real-time and not permanently stored. Account data is retained for the duration of your account plus 30 days after deletion. Audit reports are stored for 12 months unless you request earlier deletion.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-serif font-medium text-foreground mb-4">
                  Third-Party Services
                </h2>
                <p className="text-muted-foreground font-sans leading-relaxed mb-4">
                  We use carefully selected third-party services to operate our platform. These include cloud infrastructure providers and analytics tools. All third parties are bound by data processing agreements and must meet our security standards.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-medium text-foreground mb-4">
                  Contact Us
                </h2>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  For any privacy-related questions or to exercise your data rights, contact us at{" "}
                  <a href="mailto:privacy@trackifai.com" className="text-primary hover:text-primary/80 transition-colors">
                    privacy@trackifai.com
                  </a>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
