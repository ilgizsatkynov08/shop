import React from 'react'

const TaskList = ({el}) => {
	return (
		<div className='container'>
			<div className='task'>
				{
<ul  className='flex align-center justify-center'>
	<li className='text-center list max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400'>{el.name}</li>

</ul>

				}
			</div>
		</div>
	);
};

export default TaskList;
