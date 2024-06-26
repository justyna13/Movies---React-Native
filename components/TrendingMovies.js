import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableWithoutFeedback, Dimensions, Image } from "react-native";
import Carousel from 'react-native-snap-carousel';

var { width, height } = Dimensions.get('window');

export const TrendingMovies = ({ data }) => {
    const navigation = useNavigation();

    const handleClick = (item) => {
        navigation.navigate('Movie', item);
    }

    return (
        <View className="mb-8">
            <Text className="text-white text-xl mx-4 mb-5">Trending</Text>
            <Carousel
                data={data}
                renderItem={({ item }) => <MovieCard item={item} handleClick={() => handleClick(item)} />}
                firstItem={1}
                inactiveSlideOpacity={0.60}
                sliderWidth={width}
                itemWidth={width * 0.62}
                slideStyle={{ display: 'flex', alignItems: 'center' }}
            />
        </View>
    )
}


const MovieCard = ({ item, handleClick }) => {
    return (
        <TouchableWithoutFeedback onPress={() => handleClick(item)}>
            <Image
                source={require('../assets/images/moviePoster1.jpg')}
                style={{
                    width: width * 0.6,
                    height: height * .4
                }}
                className="rounded-3xl"
            />
        </TouchableWithoutFeedback>
    )
}