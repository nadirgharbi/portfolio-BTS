import { ContactInfo } from "./ContactInfo";

export const ContactInfos: React.FC<ContactInfosProps> = ({ infos }) => {
	return (
		<>
			<div className={`grid md:grid-cols-${infos.length} gap-3`}>
				{infos.map((info, key) => (
					<ContactInfo {...info} key={key} />
				))}
			</div>
		</>
	);
};
