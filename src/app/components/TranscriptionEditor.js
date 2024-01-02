import TranscriptionItems from "./TranscriptionItems";

export default function TranscriptionEditor ({awsTranscriptionItems, setAwsTranscriptionItems}){
    function updateTranscriptionItem(index,prop,ev){
        const newAwsItems= [...awsTranscriptionItems];
        const newItem={...newAwsItems[index]};
        newItem[prop]= ev.target.value;
        newAwsItems[index] = newItem;
        setAwsTranscriptionItems(newAwsItems);
    }
    
    return(
        <>
             <div className="flex grid grid-cols-3 sticky top-0 bg-violet-800/60 p-2 rounded-md">
                        <div className="">From</div>
                        <div className="">End</div>
                        <div className="">Content</div>
                    </div>

                    {awsTranscriptionItems.length>0 && (
                        <div className="h-48 sm:h-auto overflow-y-scroll sm:overflow-auto">
                            {awsTranscriptionItems.map((item , key) => (
                                <div  key={key}>
                                    <TranscriptionItems 
                                    handelStartTimechange={ev => updateTranscriptionItem(key,
                                    'start_time',ev)}
                                    handelEndTimechange={ev => updateTranscriptionItem(key,
                                    'end_time',ev)}
                                    handelContentchange={ev => updateTranscriptionItem(key,
                                    'content',ev)}
                                    item={item}/>
                                </div>
                            ))}
                        
                        </div>
                    )}
        </>
    )
}