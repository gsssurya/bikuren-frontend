
function sortedBike(bikes, keyword) {
    const available = bikes.filter(b => b.status === "available");
    const rent = bikes.filter(b => b.status === "rented");
    const maintenance = bikes.filter(b => b.status === "maintenance");
    const sortedBikes = [...available, ...rent, ...maintenance];
    if(keyword){
        const chars = keyword.toLowerCase().split("");

        const bikesToShow = sortedBikes.filter((bike) =>
            chars.every(char =>
            bike.name.toLowerCase().includes(char))
        );

        return bikesToShow;
    } else {
        return sortedBikes;
    }
}

export default sortedBike;