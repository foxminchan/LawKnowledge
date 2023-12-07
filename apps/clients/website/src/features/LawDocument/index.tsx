import { Card, Grid } from '@mui/material';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';

import useMetadata from '@/common/hooks/useMetadata';
import Topic from '@assets/vendor/Topic.json';
import Heading from "@assets/vendor/Heading.json";
import Documents from "@assets/vendor/Document.json"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState } from 'react';

type Props = {
  title: string;
};

export default function LawDocument(props: Readonly<Props>) {
  useMetadata(props.title);

  const [selectedHeadingId, setSelectedHeadingId] = useState<string | null>(null);

  return (
    <div>
      <Grid container spacing={2} className="my-5">
        <Grid item xs={6}>
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
                {Topic.map((item) => (
                  <TreeItem
                    key={item.id}
                    nodeId={item.no as unknown as string}
                    label={item.name}
                    className="!mb-3"
                  >
                    {Heading.map((headingItem) => (
                      headingItem.topic_id === item.id ? (
                        <TreeItem
                          key={headingItem.id}
                          nodeId={headingItem.id}
                          label={headingItem.name}
                          className="!line-clamp-2 !mb-3"
                          onClick={() => setSelectedHeadingId(headingItem.id)}
                        />
                      ) : null
                    ))}
                  </TreeItem>
                ))}
              </TreeView>
            </Card>
          </div>
        </Grid>
        <Grid item xs={6}>
          {selectedHeadingId && (
            <div>
              <p>{Heading.find((heading) => heading.id === selectedHeadingId)?.name}</p>
              {/* Render other content associated with the selected heading */}

              <div>
              {Documents.map((item) => {
                // Assuming heading_id is the property to link Documents to Heading
                if (item.heading_id === selectedHeadingId) {
                  return (
                    <div key={item.id}>
                      <h4>{item.title}</h4>
                      <p>{item.content}</p>
                      {/* Add other content rendering based on your data structure */}
                    </div>
                  );
                }
                return null;
              })}


                

              </div>            
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
