import { List, ListItem, ListItemIcon, Typography } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

type Props = {
  data: { id: number; name: string }[];
};

export default function ContentSection(props: Readonly<Props>) {
  return (
    <List className="list-dot">
      {props.data.map((item) => (
        <ListItem
          disableGutters
          className="flex items-start pl-8 mb-1"
          key={item.id}
        >
          <ListItemIcon>
            <FiberManualRecordIcon
              className="mx-2 my-2 text-red-600"
              fontSize="inherit"
            />
          </ListItemIcon>
          <Typography variant="body1" className="text-xl text-black">
            {item.name}
          </Typography>
        </ListItem>
      ))}
    </List>
  );
}
