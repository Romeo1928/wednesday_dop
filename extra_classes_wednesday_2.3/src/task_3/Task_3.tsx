import {ChangeEvent, FC, memo, ReactNode, useMemo, useState} from 'react';
import {SlowComponent} from './slowComponent/SlowComponent';


//find the problem and fix it as part of composition optimization, memo, children


// children
// export const Task_3 = () => {
//    const [value, setValue] = useState('');
//
//    const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);
//
//    return (
//       <div>
//          <div>Lags when change value</div>
//          <input type="text" value={value} onChange={onChange} />
//          <SlowComponentWrapper>
//             <SlowComponent />
//          </SlowComponentWrapper>
//       </div>
//    );
// };
//
// type SlowComponentWrapperProps  = {
//    children: ReactNode;
// }
//
// export const SlowComponentWrapper: FC<SlowComponentWrapperProps> = ({ children }) => {
//
//    const memoizedChildren = useMemo(() => children, []);
//
//    return (
//       <>
//          {memoizedChildren}
//       </>
//    );
// };

// children
type PropsType = {
	children: ReactNode
}

const Container: FC<PropsType> = ({children}) => {
	console.log('Container')

	const [value, setValue] = useState('');
	const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);

	return (
		<div>
			<div>Lags when change value</div>
			<input type="text" value={value} onChange={onChange}/>
			{children}
		</div>
	);
}

export const Task_3 = () => {
	console.log('Task_3')

	return (
		<Container>
			<SlowComponent/>
		</Container>
	)
};


// Оптимизация Композиции
// const MemoizedSlowComponent = memo(SlowComponent);
//
// export const Task_3 = () => {
//    const [value, setValue] = useState('');
//
//    const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);
//
//    return (
//       <div>
//          <div>Lags when change value</div>
//          <input type="text" value={value} onChange={onChange} />
//          <MemoizedSlowComponent />
//       </div>
//    );
// };

// 2-й способ обернул в memo SlowComponent
// export const Task_3 = () => {
//    const [value, setValue] = useState('');
//
//    const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);
//
//    return (
//       <div>
//          <div>Lags when change value</div>
//          <input type="text" value={value} onChange={onChange} />
//          <SlowComponent />
//       </div>
//    );
// };

// Оптимизация Композиции
// создал компоненту Input и перекинул туда state
// теперь перерисовывается столько Input, когда мы что-mj печатаем там
// export const Task_3 = () => {
//
//   return (
//     <div>
//       <div>Lags when change value</div>
//        <Input />
//       <SlowComponent />
//     </div>
//   );
// };
//
// const Input = () => {
//    const [value, setValue] = useState('');
//    const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);
//
//    return (
//       <input type="text" value={value} onChange={onChange} />
//    )
// }

// ORIGA -----------------------------
// export const Task_3 = () => {
//    const [value, setValue] = useState('');
//
//    const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);
//
//    return (
//       <div>
//          <div>Lags when change value</div>
//          <input type="text" value={value} onChange={onChange} />
//          <SlowComponent />
//       </div>
//    );
// };
