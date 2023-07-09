type Props = {
    title: string;
    modalButton: () => void;
};

const index = ({ title, modalButton }: Props) => {
    return (
			<div className="flex justify-between my-5 items-center">
				<h1 className="text-3xl  font-semibold">{title}</h1>
				<button
					onClick={modalButton}
					className="bg-blue-500 text-white w-20 py-2 rounded-lg"
				>
					Edit
				</button>
			</div>
		);
};

export default index;
