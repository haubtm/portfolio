import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiDownload, FiMaximize2 } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import "./CVViewer.css";

interface CVViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CVViewer = ({ isOpen, onClose }: CVViewerProps) => {
  const { t } = useTranslation();
  const cvUrl = "/LeBaHau_FrontendDeveloper.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "LeBaHau_FrontendDeveloper.pdf";
    link.click();
  };

  const handleOpenNewTab = () => {
    window.open(cvUrl, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="cv-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="cv-modal"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="cv-header">
              <h3 className="cv-title">{t("cv.title")}</h3>
              <div className="cv-actions">
                <motion.button
                  className="cv-action-btn"
                  onClick={handleOpenNewTab}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title={t("cv.openNewTab")}
                >
                  <FiMaximize2 size={18} />
                </motion.button>
                <motion.button
                  className="cv-action-btn"
                  onClick={handleDownload}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title={t("cv.download")}
                >
                  <FiDownload size={18} />
                </motion.button>
                <motion.button
                  className="cv-action-btn cv-close-btn"
                  onClick={onClose}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title={t("cv.close")}
                >
                  <FiX size={20} />
                </motion.button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="cv-body">
              <iframe
                src={`${cvUrl}#toolbar=0&navpanes=0`}
                className="cv-iframe"
                title="CV - Lê Bá Hậu"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CVViewer;
