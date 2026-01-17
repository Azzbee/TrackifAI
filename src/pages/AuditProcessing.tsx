import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { getAudit } from "@/lib/api";
import Navigation from "@/components/landing/Navigation";

const processingSteps = [
  { id: 1, label: "Scanning website", duration: 2000 },
  { id: 2, label: "Analyzing content", duration: 3000 },
  { id: 3, label: "Evaluating TikTok presence", duration: 2000 },
  { id: 4, label: "Finding competitors", duration: 2000 },
  { id: 5, label: "Generating insights", duration: 3000 },
  { id: 6, label: "Creating content plan", duration: 3000 },
];

const AuditProcessing = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [status, setStatus] = useState<'processing' | 'completed' | 'failed'>('processing');
  const [error, setError] = useState<string | null>(null);

  // Poll for audit status
  useEffect(() => {
    if (!id) return;

    const pollStatus = async () => {
      try {
        const audit = await getAudit(id);
        setStatus(audit.status);

        if (audit.status === 'completed') {
          // Wait a moment then navigate to results
          setTimeout(() => {
            navigate(`/audit/${id}`);
          }, 1000);
        } else if (audit.status === 'failed') {
          setError('Audit failed. Please try again.');
        }
      } catch (err) {
        console.error('Error polling audit status:', err);
      }
    };

    // Poll every 3 seconds
    const interval = setInterval(pollStatus, 3000);
    pollStatus(); // Initial check

    return () => clearInterval(interval);
  }, [id, navigate]);

  // Animate through steps
  useEffect(() => {
    if (status !== 'processing') return;

    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < processingSteps.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 2500);

    return () => clearInterval(stepInterval);
  }, [status]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12 font-sans text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="card-editorial p-8 md:p-12"
          >
            {status === 'processing' && (
              <>
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Loader2 className="w-8 h-8 text-primary animate-spin" />
                </div>

                <h1 className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-4">
                  Analyzing Your Brand
                </h1>

                <p className="text-muted-foreground font-sans mb-8">
                  Our AI is conducting a comprehensive audit of your website and social presence.
                  This usually takes 45-90 seconds.
                </p>

                {/* Progress Steps */}
                <div className="space-y-3 text-left max-w-md mx-auto">
                  {processingSteps.map((step, index) => (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{
                        opacity: index <= currentStep ? 1 : 0.4,
                        x: 0,
                      }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      className="flex items-center gap-3"
                    >
                      {index < currentStep ? (
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      ) : index === currentStep ? (
                        <Loader2 className="w-5 h-5 text-primary animate-spin flex-shrink-0" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-muted flex-shrink-0" />
                      )}
                      <span
                        className={`font-sans text-sm ${
                          index <= currentStep ? 'text-foreground' : 'text-muted-foreground'
                        }`}
                      >
                        {step.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </>
            )}

            {status === 'completed' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>

                <h1 className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-4">
                  Audit Complete!
                </h1>

                <p className="text-muted-foreground font-sans">
                  Redirecting to your results...
                </p>
              </motion.div>
            )}

            {status === 'failed' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-500/10 flex items-center justify-center">
                  <AlertCircle className="w-8 h-8 text-red-500" />
                </div>

                <h1 className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-4">
                  Audit Failed
                </h1>

                <p className="text-muted-foreground font-sans mb-6">
                  {error || 'Something went wrong. Please try again.'}
                </p>

                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-sage font-sans text-sm"
                >
                  Try Again
                </Link>
              </motion.div>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default AuditProcessing;
