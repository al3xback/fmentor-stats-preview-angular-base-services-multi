export class CardService {
	private card = {
		title: 'Get <mark>insights</mark> that help your business grow.',
		description:
			'Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.',
		imageUrl: '/assets/images/meeting.jpg',
		statuses: [
			{
				label: 'Companies',
				amount: '10K+'
			},
			{
				label: 'Templates',
				amount: '314'
			},
			{
				label: 'Queries',
				amount: '12M+'
			}
		]
	};

	getCard() {
		return this.card;
	}
}
