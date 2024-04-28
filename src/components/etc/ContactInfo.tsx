export const ContactInfo: React.FC<ContactInfoProps> = ({ icon, label }) => {
	return (
		<>
			<div className="relative z-[902] space-y-3 mt-10 ">
				<p className="flex gap-2 items-center justify-center">{icon}</p>
				<p className="text-center text-sm font-bold text-wrap">{label}</p>
			</div>
		</>
	);
};
