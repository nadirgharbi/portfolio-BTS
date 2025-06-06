import { ContactInfo } from "./ContactInfo";

export const ContactInfos: React.FC<ContactInfosProps> = ({ infos }) => {
	return (
		<>
			<div className={`grid md:grid-cols-3 gap-0`}>
				{infos.map((info, key) => (
					<ContactInfo {...info} key={key} />
				))}
			</div>
		</>
	);
};
