import {ChangeEvent, FC, memo, ReactNode, useMemo, useState} from 'react';
import {SlowComponent} from './slowComponent/SlowComponent';


//find the problem and fix it as part of composition optimization, memo, children

type TaskChildrenProps = {
	children: ReactNode
}

export const TaskChildren: FC<TaskChildrenProps> = ({children}) => {
   const [value, setValue] = useState('');

   const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);

   return (
      <div>
         <div>Lags when change value</div>
         <input type="text" value={value} onChange={onChange} />
			{children}
      </div>
   );
};
