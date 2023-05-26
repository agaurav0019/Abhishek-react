

import { RdsIcon, RdsButton } from '../rds-elements';
import React, { useState } from "react";

export interface FileItem {
  id: string;
  name: string;
  hasChildren?: boolean;
  children?: FileItem[];
}

export interface RdsCompFileMoverProps {
  items: any;
  path: any;
  selectedItemId?: string;
  
  
}

export const RdsCompFileMover = ({
  items,
  path,
  selectedItemId,
}: RdsCompFileMoverProps) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const handleClick = (id: string, name:string) => () => {
    if (expandedItems.includes(id)) {
      setExpandedItems(expandedItems.filter((item) => item !== id));
    } else {
      setExpandedItems([...expandedItems, id]);
    }
    path({ id });
  };

  const renderFileItem = (item: FileItem) => (
    <>
    <div key={item.name}>
      <div className="d-flex align-items-center pt-2 me-3">
        {item.hasChildren && (
          <RdsIcon
            // name={
            //   expandedItems.includes(item.id)
            //     ? "chevron_down"
            //     : "chevron_right"
            // }
            height="8px"
            width="6px"
            fill={false}
            stroke={true}
            onClick={handleClick(item.id,item.name)}
          />
        )}
        <RdsIcon
          name="folder"
          height="15px"
          width="15px"
          fill={false}
          stroke={true}
          colorVariant={selectedItemId === item.id ? "primary" : undefined}
          onClick={handleClick(item.id,item.name)}
        />
        <span className="ms-2">{item.name}</span>
      </div>
      {item.children && expandedItems.includes(item.id) && (
        <div className="ms-2">
          <RdsCompFileMover
            items={item.children}
            path={path}
            selectedItemId={selectedItemId}
          
          />
        </div>
      )}
    </div>
    </>
  );

  const renderFileItems = (items: FileItem[]) => {
    return items.map(renderFileItem);
  };

  return <>{renderFileItems(items)}</>;
};

export default RdsCompFileMover;
