import { motion } from "framer-motion";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";

const Terms = () => {
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
              Terms of Use
            </h1>
            <p className="text-muted-foreground font-sans mb-12">
              Last updated: January 2024
            </p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-serif font-medium text-foreground mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-muted-foreground font-sans leading-relaxed mb-4">
                  By accessing or using trackifAI ("the Service"), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our Service.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-serif font-medium text-foreground mb-4">
                  2. User Responsibilities
                </h2>
                <p className="text-muted-foreground font-sans leading-relaxed mb-4">
                  As a user of trackifAI, you agree to:
                </p>
                <ol className="list-decimal list-inside text-muted-foreground font-sans space-y-3 ml-4">
                  <li>Provide accurate information when creating an account or submitting websites for analysis</li>
                  <li>Only submit websites that you own or have explicit authorization to analyze</li>
                  <li>Use the Service in compliance with all applicable laws and regulations</li>
                  <li>Not attempt to reverse engineer, decompile, or extract our proprietary algorithms</li>
                  <li>Not use the Service to generate content that is harmful, misleading, or violates third-party rights</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                </ol>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-serif font-medium text-foreground mb-4">
                  3. AI-Generated Content Liability
                </h2>
                <p className="text-muted-foreground font-sans leading-relaxed mb-4">
                  trackifAI uses artificial intelligence to generate marketing insights, copy suggestions, and strategic recommendations. Please note:
                </p>
                <ol className="list-decimal list-inside text-muted-foreground font-sans space-y-3 ml-4">
                  <li><strong className="text-foreground">No Guarantee of Results:</strong> AI-generated content is provided as suggestions only. We do not guarantee specific business outcomes from implementing our recommendations.</li>
                  <li><strong className="text-foreground">User Discretion Required:</strong> You are responsible for reviewing, editing, and approving all AI-generated content before use. We recommend human review of all outputs.</li>
                  <li><strong className="text-foreground">Accuracy Limitations:</strong> While we strive for accuracy, AI systems may produce errors or outdated information. Always verify critical business decisions independently.</li>
                  <li><strong className="text-foreground">No Professional Advice:</strong> Our Service does not constitute legal, financial, or professional marketing advice. Consult qualified professionals for such matters.</li>
                </ol>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-serif font-medium text-foreground mb-4">
                  4. Ownership of Audit Results
                </h2>
                <p className="text-muted-foreground font-sans leading-relaxed mb-4">
                  Regarding intellectual property and ownership:
                </p>
                <ol className="list-decimal list-inside text-muted-foreground font-sans space-y-3 ml-4">
                  <li><strong className="text-foreground">Your Content:</strong> You retain all rights to the website content you submit for analysis and any original materials you provide.</li>
                  <li><strong className="text-foreground">Audit Reports:</strong> Upon payment (if applicable), you receive a perpetual, non-exclusive license to use audit reports and AI-generated recommendations for your business purposes.</li>
                  <li><strong className="text-foreground">Our Platform:</strong> trackifAI retains all rights to our platform, algorithms, methodologies, and underlying technology.</li>
                  <li><strong className="text-foreground">Aggregated Data:</strong> We may use anonymized, aggregated data to improve our services, but this will never include identifiable information about your business.</li>
                </ol>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-serif font-medium text-foreground mb-4">
                  5. Service Availability
                </h2>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  We strive to maintain high availability but do not guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue features with reasonable notice. Scheduled maintenance will be communicated in advance when possible.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-serif font-medium text-foreground mb-4">
                  6. Limitation of Liability
                </h2>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  To the maximum extent permitted by law, trackifAI shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service. Our total liability shall not exceed the amount paid by you for the Service in the 12 months preceding the claim.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-serif font-medium text-foreground mb-4">
                  7. Modifications to Terms
                </h2>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  We may update these Terms from time to time. Material changes will be communicated via email or prominent notice on our platform. Continued use after changes constitutes acceptance of the new Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-medium text-foreground mb-4">
                  8. Contact
                </h2>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  For questions about these Terms, contact us at{" "}
                  <a href="mailto:legal@trackifai.com" className="text-primary hover:text-primary/80 transition-colors">
                    legal@trackifai.com
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

export default Terms;
