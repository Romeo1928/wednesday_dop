import {FC, memo, useCallback, useState} from 'react';

const FIRST_BUTTON_BACKGROUND = {background: 'tomato'};
const CONTAINER_STYLES = {display: 'flex', flexDirection: 'column', gap: 10};
const BUTTON_STYLES = {border: 'none', outline: 'none', color: 'white', borderRadius: 5};

type PropsType = { isChecked: boolean, onSetIsChecked: () => void };

// Task
// If click to Button component Checkbox not re-render
// If click to Checkbox component Button not re-render

// ПРИ КЛИКЕ на button компонента Button не перерисовывается
// export const Task_2 = () => {
// 	console.log(1)
// 	const [firstCount, setFirstCount] = useState(0);
// 	const [isChecked, setIsChecked] = useState(false);
//
// 	const handleSetIsChecked = useCallback(() => setIsChecked(!isChecked), [isChecked]);
//
// 	const handlePlusCountValueClick = useCallback(() => setFirstCount(prevFirstCount => prevFirstCount + 1), []);
//
// 	return (
// 		<div style={{...CONTAINER_STYLES} as any}>
// 			<div>{`Count equal: ${firstCount}`}</div>
// 			<Button onPlusCountValueClick={handlePlusCountValueClick}/>
// 			<Checkbox isChecked={isChecked} onSetIsChecked={handleSetIsChecked}/>
// 		</div>
// 	);
// };
//
// export const Button: FC<{ onPlusCountValueClick: () => void }> = memo(({onPlusCountValueClick}) => {
// 	console.log(2)
// 	return (
// 		<div>
// 			<button style={{...FIRST_BUTTON_BACKGROUND, ...BUTTON_STYLES}} onClick={onPlusCountValueClick}>
// 				Plus first counter
// 			</button>
// 		</div>
// 	);
// });
//
// export const Checkbox: FC<PropsType> = memo(({isChecked, onSetIsChecked}) => {
// 	console.log(3)
// 	return (
// 		<input type="checkbox" checked={isChecked} onChange={onSetIsChecked}/>
// 	);
// });

// export const Task_2 = () => {
//    console.log('Task_2')
//
//    const [firstCount, setFirstCount] = useState(0);
//    const [isChecked, setIsChecked] = useState(false);
//
//    // const handleSetIsChecked = () => setIsChecked(!isChecked);
//    const handleSetIsChecked = useCallback(() => {
//       setIsChecked((prevIsChecked) => !prevIsChecked);
//    }, []);
//
//    const handlePlusCountValueClick = useCallback(() => setFirstCount(prevFirstCount => prevFirstCount + 1), []);
//
//    return (
//       <div style={{...CONTAINER_STYLES} as any}>
//          <div>{`Count equal: ${firstCount}`}</div>
//          <Button onPlusCountValueClick={handlePlusCountValueClick} />
//          <Checkbox isChecked={isChecked} onSetIsChecked={handleSetIsChecked} />
//       </div>
//    );
// };
//
// export const Button: FC<{ onPlusCountValueClick: () => void }> = memo(({onPlusCountValueClick}) => {
//    console.log('button')
//    return (
//       <div>
//          <button
//             style={{...FIRST_BUTTON_BACKGROUND, ...BUTTON_STYLES}}
//             onClick={onPlusCountValueClick}
//          >
//             Plus first counter
//          </button>
//       </div>
//    );
// });
//
// // export const Checkbox: FC<PropsType> = ({isChecked, onSetIsChecked}) => {
// //    return (
// //       <input type="checkbox" checked={isChecked} onChange={onSetIsChecked} />
// //    );
// // };
//
// export const Checkbox: FC<PropsType> = memo(({isChecked, onSetIsChecked}) => {
//    console.log('input')
//   return (
//     <input type="checkbox" checked={isChecked} onChange={onSetIsChecked} />
//   );
// });

// 2) ПЕРЕКИНУЛ useState() в компоненту Checkbox
// export const Task_2 = () => {
//    const [firstCount, setFirstCount] = useState(0);
//
//    const handlePlusCountValueClick = () => setFirstCount(prevFirstCount => prevFirstCount + 1);
//
//    return (
//       <div style={{...CONTAINER_STYLES} as any}>
//          <div>{`Count equal: ${firstCount}`}</div>
//          <Button onPlusCountValueClick={handlePlusCountValueClick} />
//          <Checkbox />
//       </div>
//    );
// };
//
// export const Button: FC<{ onPlusCountValueClick: () => void }> = ({onPlusCountValueClick}) => {
//    return (
//       <div>
//          <button
//             style={{...FIRST_BUTTON_BACKGROUND, ...BUTTON_STYLES}}
//             onClick={onPlusCountValueClick}
//          >
//             Plus first counter
//          </button>
//       </div>
//    );
// };
//
//
//
// export const Checkbox  = () => {
//    const [isChecked, setIsChecked] = useState(false);
//    const handleSetIsChecked = () => setIsChecked(!isChecked);
//
//    return (
//       <input type="checkbox" checked={isChecked} onChange={handleSetIsChecked} />
//    );
// };

// 1) memo и useCallBack()
export const Task_2 = () => {
  const [firstCount, setFirstCount] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  // const handleSetIsChecked = () => setIsChecked(!isChecked);
   const handleSetIsChecked = useCallback(() => {
      setIsChecked((prevIsChecked) => !prevIsChecked);
   }, []);
   // мы использовали React useCallback() для мемоизации обработчика handleSetIsChecked.
   // Теперь компонент Checkbox не будет перерисовываться при клике на кнопку.

  const handlePlusCountValueClick = () => setFirstCount(prevFirstCount => prevFirstCount + 1);

  return (
    <div style={{...CONTAINER_STYLES} as any}>
      <div>{`Count equal: ${firstCount}`}</div>
      <Button onPlusCountValueClick={handlePlusCountValueClick} />
      <Checkbox isChecked={isChecked} onSetIsChecked={handleSetIsChecked} />
    </div>
  );
};


export const Button: FC<{ onPlusCountValueClick: () => void }> = ({onPlusCountValueClick}) => {
  return (
    <div>
      <button
        style={{...FIRST_BUTTON_BACKGROUND, ...BUTTON_STYLES}}
        onClick={onPlusCountValueClick}
      >
        Plus first counter
      </button>
    </div>
  );
};


export const Checkbox: FC<PropsType> = memo(({isChecked, onSetIsChecked}) => {
   console.log("checkbox")
  return (
    <input type="checkbox" checked={isChecked} onChange={onSetIsChecked} />
  );
});
// // мы использовали React memo() для мемоизации компонента Checkbox,
// // чтобы он перерисовывался только при изменении его пропсов.


// ORIGA -----------------------------------------------
// const FIRST_BUTTON_BACKGROUND = {background: 'tomato'};
// const CONTAINER_STYLES = {display: 'flex', flexDirection: 'column', gap: 10};
// const BUTTON_STYLES = {border: 'none', outline: 'none', color: 'white', borderRadius: 5};
//
// type PropsType = { isChecked: boolean, onSetIsChecked: () => void };
//
// // Task
// // If click to Button component Checkbox not re-render
// // If click to Checkbox component Button not re-render
//
// export const Task_2 = () => {
//    const [firstCount, setFirstCount] = useState(0);
//    const [isChecked, setIsChecked] = useState(false);
//
//    const handleSetIsChecked = () => setIsChecked(!isChecked);
//
//    const handlePlusCountValueClick = () => setFirstCount(prevFirstCount => prevFirstCount + 1);
//
//    return (
//       <div style={{...CONTAINER_STYLES} as any}>
//          <div>{`Count equal: ${firstCount}`}</div>
//          <Button onPlusCountValueClick={handlePlusCountValueClick} />
//          <Checkbox isChecked={isChecked} onSetIsChecked={handleSetIsChecked} />
//       </div>
//    );
// };
//
// export const Button: FC<{ onPlusCountValueClick: () => void }> = ({onPlusCountValueClick}) => {
//    return (
//       <div>
//          <button
//             style={{...FIRST_BUTTON_BACKGROUND, ...BUTTON_STYLES}}
//             onClick={onPlusCountValueClick}
//          >
//             Plus first counter
//          </button>
//       </div>
//    );
// };
//
// export const Checkbox: FC<PropsType> = ({isChecked, onSetIsChecked}) => {
//    return (
//       <input type="checkbox" checked={isChecked} onChange={onSetIsChecked} />
//    );
// };
