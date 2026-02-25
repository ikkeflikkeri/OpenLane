export type User = {
	id: string;
	name: string;
	company?: string;
	avatar?: string;
};

export type Bid = {
	id: string;
	auctionId: string;
	bidderId: string;
	amount: number;
	time: string;
};

export type Auction = {
	id: string;
	name: string;
	year: number;
	priceEstimate: number;
	mileage: number;
	location: string;
	fuel: 'Gasoline' | 'Hybrid' | 'Electric';
	transmission: 'Automatic' | 'Manual';
	image: string;
	gallery: string[];
	status: 'Live' | 'Upcoming' | 'Closed';
	rating: number;
	bids: number;
	currentBid: number;
	startingBid: number;
	endTime: string;
	sellerId: string;
};

export const users: User[] = [
	{ id: 'u-drive-max', name: 'DriveMax Capital', company: 'DriveMax Capital' },
	{ id: 'u-apex', name: 'Apex Auto Fund', company: 'Apex Auto Fund' },
	{ id: 'u-velocity', name: 'Velocity Collective', company: 'Velocity Collective' },
	{ id: 'u-nordic', name: 'Nordic Motors', company: 'Nordic Motors' },
	{ id: 'u-heritage', name: 'Heritage Motors', company: 'Heritage Motors' }
];

export const auctions: Auction[] = [
	{
		id: 'ol-gt500',
		name: '2022 Ford Mustang Shelby GT500',
		year: 2022,
		priceEstimate: 102000,
		mileage: 4200,
		location: 'Munich, DE',
		fuel: 'Gasoline',
		transmission: 'Automatic',
		image:
			'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80',
		gallery: [
			'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80',
			'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1400&q=80',
			'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1400&q=80'
		],
		status: 'Live',
		rating: 4.9,
		bids: 18,
		currentBid: 98500,
		startingBid: 89000,
		endTime: new Date(Date.now() + 1000 * 60 * 60 * 2).toISOString(),
		sellerId: 'u-heritage'
	},
	{
		id: 'ol-911-gt3',
		name: '2021 Porsche 911 GT3',
		year: 2021,
		priceEstimate: 174000,
		mileage: 7600,
		location: 'Hamburg, DE',
		fuel: 'Gasoline',
		transmission: 'Automatic',
		image:
			'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1400&q=80',
		gallery: [
			'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1400&q=80',
			'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1400&q=80',
			'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1400&q=80'
		],
		status: 'Live',
		rating: 4.8,
		bids: 24,
		currentBid: 162500,
		startingBid: 148000,
		endTime: new Date(Date.now() + 1000 * 60 * 60 * 5).toISOString(),
		sellerId: 'u-heritage'
	},
	{
		id: 'ol-model-s',
		name: '2023 Tesla Model S Plaid',
		year: 2023,
		priceEstimate: 128000,
		mileage: 3100,
		location: 'Berlin, DE',
		fuel: 'Electric',
		transmission: 'Automatic',
		image:
			'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1400&q=80',
		gallery: [
			'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1400&q=80',
			'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1400&q=80',
			'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1400&q=80'
		],
		status: 'Upcoming',
		rating: 4.7,
		bids: 9,
		currentBid: 121000,
		startingBid: 109000,
		endTime: new Date(Date.now() + 1000 * 60 * 60 * 28).toISOString(),
		sellerId: 'u-heritage'
	},
	{
		id: 'ol-r8',
		name: '2020 Audi R8 V10 Performance',
		year: 2020,
		priceEstimate: 156000,
		mileage: 9800,
		location: 'Cologne, DE',
		fuel: 'Gasoline',
		transmission: 'Automatic',
		image:
			'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=1400&q=80',
		gallery: [
			'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=1400&q=80',
			'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80',
			'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1400&q=80'
		],
		status: 'Live',
		rating: 4.6,
		bids: 16,
		currentBid: 151000,
		startingBid: 139000,
		endTime: new Date(Date.now() + 1000 * 60 * 60 * 7).toISOString(),
		sellerId: 'u-heritage'
	},
	{
		id: 'ol-supra',
		name: '2019 Toyota Supra GR',
		year: 2019,
		priceEstimate: 65000,
		mileage: 15400,
		location: 'Stuttgart, DE',
		fuel: 'Gasoline',
		transmission: 'Manual',
		image:
			'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1400&q=80',
		gallery: [
			'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1400&q=80',
			'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80',
			'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1400&q=80'
		],
		status: 'Closed',
		rating: 4.5,
		bids: 22,
		currentBid: 64800,
		startingBid: 52000,
		endTime: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
		sellerId: 'u-heritage'
	},
	{
		id: 'ol-rs6',
		name: '2022 Audi RS6 Avant',
		year: 2022,
		priceEstimate: 142000,
		mileage: 5200,
		location: 'Frankfurt, DE',
		fuel: 'Hybrid',
		transmission: 'Automatic',
		image:
			'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1400&q=80',
		gallery: [
			'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1400&q=80',
			'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1400&q=80',
			'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=1400&q=80'
		],
		status: 'Upcoming',
		rating: 4.8,
		bids: 11,
		currentBid: 136000,
		startingBid: 122000,
		endTime: new Date(Date.now() + 1000 * 60 * 60 * 40).toISOString(),
		sellerId: 'u-heritage'
	}
];

export const bids: Bid[] = [
	{ id: 'b-1', auctionId: 'ol-gt500', bidderId: 'u-drive-max', amount: 98500, time: '2m ago' },
	{ id: 'b-2', auctionId: 'ol-gt500', bidderId: 'u-apex', amount: 97250, time: '6m ago' },
	{ id: 'b-3', auctionId: 'ol-gt500', bidderId: 'u-velocity', amount: 96000, time: '12m ago' },
	{ id: 'b-4', auctionId: 'ol-gt500', bidderId: 'u-nordic', amount: 94500, time: '18m ago' },
	{ id: 'b-5', auctionId: 'ol-911-gt3', bidderId: 'u-drive-max', amount: 162500, time: '5m ago' },
	{ id: 'b-6', auctionId: 'ol-911-gt3', bidderId: 'u-apex', amount: 160000, time: '9m ago' },
	{ id: 'b-7', auctionId: 'ol-r8', bidderId: 'u-velocity', amount: 151000, time: '14m ago' }
];

export const getAuctions = () => auctions;

export const getAuctionById = (id: string) => auctions.find((auction) => auction.id === id);

export const getFeaturedAuctions = (count = 3) => auctions.slice(0, count);

export const getBidsForAuction = (auctionId: string) =>
	bids.filter((bid) => bid.auctionId === auctionId);

export const getUserById = (id: string) => users.find((user) => user.id === id);
