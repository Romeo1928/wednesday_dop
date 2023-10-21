import {ChangeEvent, FC, memo, useCallback, useMemo, useState} from 'react';

const CONTAINER_STYLES = {display: 'flex', flexDirection: 'column', gap: 10};

type PropsType = { value: string, onChange: (e: ChangeEvent<HTMLInputElement>) => void };

// Task 1
// 1) If change value on input Title component not re-render
// 2) If change value on input Task_1 component not re-render

// 1) React memo
export const Task_1 = () => {
	const [value, setValue] = useState('');

	 const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
	 	setValue(e.currentTarget.value);
	 };

	return (
		<div style={{...CONTAINER_STYLES} as any}>
			<Input value={value} onChange={handleChange} />
			<MemoizedTitle title="I am a title" />
			<Title title="I am a title" />
		</div>
	);
};

const Title = memo((props: { title: string }) => <h3>{props.title}</h3>);

const MemoizedTitle = memo(Title);

const Input: FC<PropsType> = ({ value, onChange }) => {
	return (
		<input type="text" placeholder="Placeholder" value={value} onChange={onChange} />
	);
};

// 1) useMemo() излишне, т.к. useMemo() используется для мемоизации вычислений,
// а мы обернули компоненту Title с неизменными props
// export const Task_1 = () => {
// 	const [value, setValue] = useState('');
//
// 	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
// 		setValue(e.currentTarget.value);
// 	};
//
// 	const memoizedTitle = useMemo(() =>
// 			<Title title="I am a title"/>
// 		, []);
//
// 	return (
// 		<div style={{...CONTAINER_STYLES} as any}>
// 			<Input value={value} onChange={handleChange}/>
// 			{memoizedTitle}
// 		</div>
// 	);
// };
//
// const Title = (props: { title: string }) => <h3>{props.title}</h3>;
//
// const Input: FC<PropsType> = ({value, onChange}) => {
// 	return (
// 		<input type="text" placeholder="Placeholder" value={value} onChange={onChange}/>
// 	);
// };

// 1, 2) ПЕРЕКИНУЛ useState в input, теперь Task_1, Title не перерисовывается при вводе текста в input
// export const Task_1 = () => {
//
//   return (
//     <div style={{...CONTAINER_STYLES} as any}>
//       <Input/>
//       <Title title="I am a title" />
//     </div>
//   );
// };
//
// const Title = (props: { title: string }) => <h3>{props.title}</h3>;
//
// const Input = () => {
//   const [value, setValue] = useState('');
//
//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setValue(e.currentTarget.value);
//   };
//
//   return (
//     <input type="text" placeholder="Placeholder" value={value} onChange={handleChange} />
//   );
// };

// ORIGA ----------------------------------------------
// export const Task_1 = () => {
//   const [value, setValue] = useState('');
//
//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setValue(e.currentTarget.value);
//   };
//
//   return (
//      <div style={{...CONTAINER_STYLES} as any}>
//        <Input value={value} onChange={handleChange} />
//        <Title title="I am a title" />
//      </div>
//   );
// };
//
// const Title = (props: { title: string }) => <h3>{props.title}</h3>;
//
// const Input: FC<PropsType> = ({value, onChange}) => {
//   return (
//      <input type="text" placeholder="Placeholder" value={value} onChange={onChange} />
//   );
// };
