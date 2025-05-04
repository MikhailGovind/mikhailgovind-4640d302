
import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { getProjectBySlug } from "@/data/projects";
import NotFound from "./NotFound";

type DocumentType = "design" | "technical";

const DocumentViewer = () => {
  const { type, slug } = useParams<{ type: DocumentType; slug: string }>();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug || "");
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (!project) {
    return <NotFound />;
  }
  
  // Check if this document type exists for this project
  const hasDocument = 
    (type === "design" && project.hasDesignDoc) ||
    (type === "technical" && project.hasTechDoc);
    
  if (!hasDocument) {
    return <NotFound />;
  }
  
  // Document path would be set up when user uploads the document
  const documentPath = `/documents/${type}/${slug}.pdf`;
  
  return (
    <MainLayout>
      {/* Moving background mesh */}
      <div className="moving-mesh"></div>
      
      <div className="page-container">
        <div className="flex justify-between items-center mb-8">
          <Link 
            to={`/projects/${project.slug}`} 
            className="inline-flex items-center text-portfolio-accent hover:text-portfolio-primary transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to {project.title}
          </Link>
          
          <h1 className="text-2xl font-bold">
            {type === "design" ? "Design Document" : "Technical Document"}
          </h1>
        </div>
        
        <div className="bg-card rounded-lg shadow-lg border border-border overflow-hidden">
          <div className="p-4 bg-muted/50 border-b border-border">
            <h2 className="font-bold text-xl">{project.title} {type === "design" ? "Design Document" : "Technical Document"}</h2>
          </div>
          
          <div className="w-full h-[calc(100vh-300px)] min-h-[500px] bg-background p-4">
            {/* This will be replaced with the actual document when uploaded */}
            <div className="flex items-center justify-center h-full bg-muted/30 rounded-lg">
              <div className="text-center">
                <p className="text-lg text-muted-foreground mb-4">
                  This is a placeholder for the {type} document.
                </p>
                <p className="text-muted-foreground">
                  Upload a PDF file using Lovable's "Select to edit" feature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DocumentViewer;
