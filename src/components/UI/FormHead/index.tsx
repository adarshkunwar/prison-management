type Props = {
	title: string;
};

const index = ({ title }: Props) => {
	return <h1 className="text-3xl py-5 font-semibold">{title}</h1>;
};

export default index;
