import {ExoticComponent, FC, Fragment, ReactNode, useMemo} from 'react';
import {Task_3} from "./task_3/Task_3";
import {SlowComponent} from "./task_3/slowComponent/SlowComponent";
import {TaskChildren} from "./task_3/TaskChildren";

export type UserType = {
	[key: string]: { name: string, id: string }
};

const DATA_7: UserType[] = [
	{u1: {name: 'Gleb', id: '1'}},
	{u2: {name: 'Dima', id: '2'}},
	{u3: {name: 'Svetlana', id: '3'}},
	{u4: {name: 'Artur', id: '4'}},
	{u5: {name: 'Vera', id: '5'}},
	{u6: {name: 'Vlad', id: '6'}},
];

// ORIGA ------------------------
// export const App = () => {
// 	return (
// 		<Fragment>
// 			<Task_3/>
// 			<hr/>
// 		</Fragment>
// 	);
// };

// children
export const App = () => {
	return (
		<Fragment>
			<TaskChildren>
				<SlowComponent/>
			</TaskChildren>
			<hr/>
		</Fragment>
	);
};