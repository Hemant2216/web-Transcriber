import SparkelIcon from "./SparkelIcon";

export default function ConvertSec(){
  return (
    <section className="flex justify-around mt-8 sm:mt-12 items-center">
      <div className="hidden sm:block bg-gray-800/50 w-[240px] h-[480px] rounded-xl overflow-hidden">
        <video src="https://hemant-epic-captions.s3.ap-south-1.amazonaws.com/without-captions.mp4" preload muted autoPlay loop></video>
      </div>
      <div className="hidden sm:block">
        <SparkelIcon />
      </div>
      <div className="bg-gray-800/50 w-[240px] h-[480px] rounded-xl overflow-hidden">
        <video src="https://hemant-epic-captions.s3.ap-south-1.amazonaws.com/with-captions.mp4" preload muted autoPlay loop></video>
      </div>
    </section>
  );
}