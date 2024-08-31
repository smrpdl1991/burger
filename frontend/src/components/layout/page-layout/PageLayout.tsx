
import { transformString } from "../../../helper/transformString.helper"
import { Footer, Header } from "../../sections";

interface PageLayoutProps {
    children: React.ReactNode;
    pageTitle: string;
}
export const PageLayout = ({children, pageTitle }:PageLayoutProps) => {
  return (
    <div className="page-layout">
        <Header />
          <div className={`body-layout ${pageTitle ? transformString(pageTitle) : ''}`}>
            {children}
          </div>
        <Footer />
    </div>
  )
}
