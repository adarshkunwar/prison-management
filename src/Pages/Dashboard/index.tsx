import Page from '../../container/Page';

const style = {
	default: 'm-4 rounded-lg',
	border: 'border-2 border-gray-200 dark:border-gray-700',
	gray: 'bg-gray-50 dark:bg-gray-800',
	text: 'text-2xl text-gray-400 text-gray-500',
	grid: 'grid  mb-4',
	grid3: 'grid-cols-3',
	grid2: 'grid-cols-2',
	flex: 'flex items-center justify-center',
};

const finalStyle = {
	overall: `${style.default} ${style.border} border-dashed -m-3`,
	smallBox: `${style.default} ${style.border} ${style.flex} ${style.gray} h-24`,
	bigBox: `${style.default} ${style.border} ${style.flex} ${style.gray} h-80`,
	grid3: `${style.grid} ${style.grid3}`,
	grid2: `${style.grid} ${style.grid2}`,
	text: `${style.text}`,
};

const topBox = [
	{
		name: 'Total Prisoners',
		value: 100,
		icon: null,
	},
	{
		name: 'Total Staffs',
		value: 100,
		icon: null,
	},
	{
		name: 'Total Visitors',
		value: 100,
		icon: null,
	},
];

const bottomBox = [
	{
		name: 'Total Incidents',
		value: 100,
		icon: null,
	},
	{
		name: 'Total Medical Reports',
		value: 100,
		icon: null,
	},
];

const Dashboard = () => {
	return (
		<Page>
			<div className="-m-5">
				<div className={`${finalStyle.overall}`}>
					<div className={`${finalStyle.grid3}`}>
						{topBox.map((item, index) => (
							<div className={`${finalStyle.smallBox}`} key={index}>
								{item.name}
								{item.value}
							</div>
						))}
					</div>
					<div className={`${finalStyle.bigBox}`}>
						<p className={`${finalStyle.text}`}>Pie chart and a graph</p>
					</div>
					<div className={`${finalStyle.grid2}`}>
						{bottomBox.map((item, index) => (
							<div className={`${finalStyle.smallBox}`} key={index}>
								{item.name}
								{item.value}
							</div>
						))}
					</div>

					{/* <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-gray-500">
                                Total Incidents:
                            </p>
                        </div>
                        <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-gray-500">
                                Total Medical Reports:
                            </p>
                        </div>
                        <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-gray-500">
                                +
                            </p>
                        </div>
                        <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-gray-500">
                                +
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                            +
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-gray-500">
                                +
                            </p>
                        </div>
                        <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-gray-500">
                                +
                            </p>
                        </div>
                        <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-gray-500">
                                +
                            </p>
                        </div>
                        <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-gray-500">
                                +
                            </p>
                        </div>
                    </div> */}
				</div>
			</div>
		</Page>
	);
};

export default Dashboard;
