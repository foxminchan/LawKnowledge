import { Card } from "@mui/material";
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import Topic  from '@assets/vendor/Topic.json';
import Heading from "@assets/vendor/Heading.json";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState } from "react";

export default function TreeViews() {

    const [selectedId, setSelectedId] = useState(1);
      
        // Function to generate data based on ID
        const generateDataById = (id) => {
          return jsonData.find((item) => item.id === id);
        };
      
        // Event handler for changing the selected ID
        const handleSelectChange = (e) => {
          setSelectedId(Number(e.target.value));
        };

        const generatedData = generateDataById(selectedId);
        
    return (
        <div className="ml-5 sticky top-5">
            <Card className="!shadow-none w-1/2 max-h-96 overflow-auto !overflow-y-auto">
                <div className="flex justify-between">
                    <h3 className="mt-3 mb-3">Mục lục Pháp Điển</h3>
                </div>
                <TreeView
                    aria-label="file system navigator"
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                    className="text-left "
                    >
                    {Topic.map((item)=> (
                        <TreeItem key={item.id} nodeId={item.no as unknown as string} label={item.name} className="!mb-3">
                            {Heading.map((headingItem)=> (
                                headingItem.topic_id === item.id ? 
                                <TreeItem key={headingItem.id} nodeId={headingItem.id} label={headingItem.name} className="!line-clamp-2" />
                                :
                                ""
                            ))}
                        </TreeItem>
                    ))}
                    </TreeView>
            </Card>
        </div>
    );
}