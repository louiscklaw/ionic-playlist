import { bicycleOutline, fastFoodOutline, filmOutline, gameControllerOutline, libraryOutline } from "ionicons/icons";

export const topics = [
	{
		header: "Attractions",
		color: "primary",
		icon: filmOutline,
		options: [
			{
				label: "Cinema"
			},
			{
				label: "Bowling Alley"
			},
			{
				label: "Crazy Golf"
			},
			{
				label: "Theme Park"
			}
		]
	},
	{
		header: "Dining",
		color: "success",
		icon: fastFoodOutline,
		options: [
			{
				label: "Breakfast & Brunch"
			},
			{
				label: "New American"
			},
			{
				label: "Sushi Bars"
			},
			{
				label: "Filipino Food"
			},
			{
				label: "Asian Fusion"
			},
			{
				label: "Ramen Houses"
			},
			{
				label: "Dinner Venues"
			}
		]
	},
	{
		header: "Gaming",
		color: "warning",
		icon: gameControllerOutline,
		options: [
			{
				label: "Xbox"
			},
			{
				label: "Playstation"
			},
			{
				label: "Nintendo Switch"
			},
			{
				label: "PC"
			},
			{
				label: "Mobile"
			},
			{
				label: "Dreamcast"
			}
		]
	},
	{
		header: "Exercise",
		color: "secondary",
		icon: bicycleOutline,
		options: [
			{
				label: "Yoga"
			},
			{
				label: "Pilates"
			},
			{
				label: "Weight Training"
			},
			{
				label: "Cardio"
			},
			{
				label: "Zumba"
			}
		]
	},
	{
		header: "Education",
		color: "danger",
		icon: libraryOutline,
		options: [
			{
				label: "School"
			},
			{
				label: "High School"
			},
			{
				label: "University Bachelors"
			},
			{
				label: "University Masters"
			},
			{
				label: "University pHD"
			}
		]
	}
];