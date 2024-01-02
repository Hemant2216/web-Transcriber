import SparkelIcon from "./components/SparkelIcon";
import ConvertSec from "./components/ConvertSec";
import UploadIcon from "./components/UploadIcon";
import PageHeaders from "./components/PageHeaders";
import UploadForm from "./components/UploadForm";

export default function Home() {
  return (
    <>
     
      <PageHeaders
        h1Text={'Add epic captions to your videos'}
        h2Text={'with just one click'}
      />
      <div className="text-center">
        <UploadForm/>
      </div>
      <ConvertSec/>
    
    </>
  )
}
