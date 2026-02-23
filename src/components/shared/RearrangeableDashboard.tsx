import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
  type DragEndEvent,
  type DragStartEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";
import StorageCards from "../../pages/Home/components/storageCards";
import FileSharingAndUser from "../../pages/Home/components/fileSharingAndUser";
import { DeviceManagementGrid } from "../../pages/Home/components/deviceManagementGrid";
import { ProductivityDashboard } from "../../pages/Home/components/productivityDashboard";
import { EmailSection } from "../../pages/Home/components/emailSection";
import { OnlineUsers } from "../../pages/Home/components/onlineUsers";
import { ActivityReports } from "../../pages/Home/components/appAndWebActivity";


const SortableItem = ({ id, children, isOverlay = false }: { id: string; children: React.ReactNode; isOverlay?: boolean }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging && !isOverlay ? 0.3 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`relative group bg-transparent rounded-xl ${isOverlay ? "z-50 shadow-2xl scale-[1.02] cursor-grabbing" : ""}`}
    >
      <div
        {...attributes}
        {...listeners}
        className="absolute -left-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab active:cursor-grabbing p-1.5 bg-white border border-gray-200 rounded-md shadow-sm z-10 text-gray-400 hover:text-indigo-600"
      >
        <GripVertical size={18} />
      </div>
      <div>{children}</div>
    </div>
  );
};

export const RearrangeableDashboard = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [items, setItems] = useState([
    "cloud-header", "storage", "file-sharing", "device-header", 
    "device-grid", "productivity-header", "productivity-dash", 
    "email", "online-users", "activity"
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10, 
      },
    }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setItems((prev) => {
        const oldIndex = prev.indexOf(active.id as string);
        const newIndex = prev.indexOf(over.id as string);
        return arrayMove(prev, oldIndex, newIndex);
      });
    }
    setActiveId(null);
  };

  const renderComponent = (id: string) => {
    switch (id) {
      case "storage": return <StorageCards />;
      case "file-sharing": return <FileSharingAndUser />;
      case "device-grid": return <DeviceManagementGrid />;
      case "productivity-dash": return <ProductivityDashboard />;
      case "email": return <EmailSection />;
      case "online-users": return <OnlineUsers />;
      case "activity": return <ActivityReports />;
      default: return null;
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={() => setActiveId(null)}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <div className="flex flex-col gap-y-2">
          {items.map((id) => (
            <SortableItem key={id} id={id}>
              {renderComponent(id)}
            </SortableItem>
          ))}
        </div>
      </SortableContext>

      <DragOverlay dropAnimation={{
        duration: 250,
        easing: 'cubic-bezier(0.18, 0.67, 0.6, 1.22)',
      }}>
        {activeId ? (
          <SortableItem id={activeId} isOverlay>
            {renderComponent(activeId)}
          </SortableItem>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};