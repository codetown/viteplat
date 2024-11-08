// import { Card } from 'antd';
// import { useEffect, useState } from 'react';
// // import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import classes from './index.module.scss';
// //初始化数据
// const getItems = (count: number) =>
//   Array.from({ length: count }, (v, k) => k).map((k) => ({
//     id: `item-${k + 1}`,
//     content: `this is content ${k + 1}`,
//   }));

// // 重新记录数组顺序
// const reorder = (list: any[], startIndex: number, endIndex: number) => {
//   const result = Array.from(list);

//   const [removed] = result.splice(startIndex, 1);

//   result.splice(endIndex, 0, removed);
//   return result;
// };

// const grid = 8;

// // 设置样式
// const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
//   // some basic styles to make the items look a bit nicer
//   userSelect: 'none',
//   padding: grid * 2,
//   margin: `0 0 ${grid}px 0`,

//   // 拖拽的时候背景变化
//   background: isDragging ? 'lightblue' : '#ffffff',

//   // styles we need to apply on draggables
//   ...draggableStyle,
// });

// export default function () {
//   const [items, setItems] = useState<any[]>([]);
//   const onDragEnd = (result: any) => {
//     if (!result.destination) {
//       return;
//     }

//     const newItems = reorder(items, result.source.index, result.destination.index);

//     setItems([...newItems]);
//   };
//   useEffect(() => {
//     setItems(getItems(5));
//   }, []);
//   return (
//     <div className={classes.container}>
//       <Card className={classes.rightPart} title="页面布局">
//         {/*<DragDropContext onDragEnd={onDragEnd}>
//           <Droppable droppableId="droppableTarget">
//             {(provided, snapshot) => (
//               <div
//                 className={classes.widgetList}
//                 //provided.droppableProps应用的相同元素.
//                 {...provided.droppableProps}
//                 // 为了使 droppable 能够正常工作必须 绑定到最高可能的DOM节点中provided.innerRef.
//                 ref={provided.innerRef}
//               >
//                 </div>
//             )}
//       </Droppable>
//         </DragDropContext> */}
//       </Card>
//       <Card
//         title="组件列表"
//         className={classes.leftPart}
//       >
//         {/* <DragDropContext onDragEnd={onDragEnd}>
//           <Droppable droppableId="droppable">
//             {(provided: any, snapshot: any) => (
//               <div
//                 className={classes.widgetList}
//                 //provided.droppableProps应用的相同元素.
//                 {...provided.droppableProps}
//                 // 为了使 droppable 能够正常工作必须 绑定到最高可能的DOM节点中provided.innerRef.
//                 ref={provided.innerRef}
//               >
//                 {items.map((item: any, index) => (
//                   <Draggable key={item.id} draggableId={item?.id} index={index}>
//                     {(provided: any, snapshot: any) => (
//                       <div
//                         ref={provided.innerRef}
//                         {...provided.draggableProps}
//                         {...provided.dragHandleProps}
//                         style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
//                       >
//                         {item?.content}
//                       </div>
//                     )}
//                   </Draggable>
//                 ))}
//                 {provided.placeholder}
//               </div>
//             )}
//           </Droppable>
//         </DragDropContext> */}
//       </Card>
//     </div>

//   );
// };
