import { Platform, View, Text, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { styles, theme } from '../theme';
import { LinearGradient } from 'expo-linear-gradient';
import Cast from '../components/Cast';
import MovieList from '../components/MovieList';

const ios = Platform.OS === 'ios';
const topMargin = ios ? '' : 'mt-3';
var { width, height } = Dimensions.get('window');
let movieName = 'lorem inpsum sit dolorem en';

export default function MovieScreen() {
    const { params: item } = useRoute();
    const navigation = useNavigation();
    const [isFavourite, toggleFavourite] = useState(false);
    const [cast, setCast] = useState([1, 2, 3, 4, 5]);
    const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5]);

    useEffect(() => {

    }, [item]);


    return (
        <ScrollView
            contentContainerStyle={{ paddingBottom: 20 }}
            className="flex-1 bg-neutral-900 pt-2"
        >

            {/* back button and movie poster */}
            <View className="w-full">
                <SafeAreaView className={'absolute z-30 b-0 flex w-full flex-row px-4  justify-between items-center px-4' + topMargin}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.background} className="rounded-xl p-1 z-50">
                        <ChevronLeftIcon size={28} strokeWidth={2.5} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
                        <HeartIcon size={35} color={isFavourite ? theme.background : 'white'} />
                    </TouchableOpacity>
                </SafeAreaView>
                <View>
                    <Image
                        source={require('../assets/images/moviePoster1.jpg')}
                        style={{ width, height: height * 0.55 }}
                    />
                    <LinearGradient
                        colors={['transparent', 'rgba(23, 23, 23, .8)', 'rgba(23, 23, 23, 1)']}
                        style={{ width, height: height * 0.4 }}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1 }}
                        className="absolute z-31 bottom-0"
                    />
                </View>
            </View>

            {/* movie details */}
            <View style={{ marginTop: -(height * 0.09) }} className="space-y-3">
                {/* title */}
                <Text className="text-white text-center text-3xl font-bold tracking-wider">
                    {movieName}
                </Text>
                {/* status, release, runtime */}
                <Text className="text-neutral-400 font-semibold text-base text-center">
                    Released &#8226; 2020 &#8226; 170 min
                </Text>

                {/* genras */}
                <View className="flex-row justify-center mx-4 space-x-2">
                    <Text className="text-neutral-400 font-semibold text-base text-center">Action  &#8226;</Text>
                    <Text className="text-neutral-400 font-semibold text-base text-center">Thrill  &#8226;</Text>
                    <Text className="text-neutral-400 font-semibold text-base text-center">Comedy</Text>
                </View>

                {/* descrciption */}
                <Text className="text-neutral-400 mx-4 tracking-wide">
                    Ullamco commodo incididunt cupidatat excepteur. Aute sit qui commodo est ex esse qui. Irure duis velit irure fugiat nostrud eu sit.
                    Officia laborum voluptate officia ad ipsum eu anim exercitation fugiat cillum aute. Nulla reprehenderit non minim tempor non veniam dolore quis pariatur occaecat amet incididunt aliquip velit. Anim ea cupidatat sint ipsum ad commodo ullamco. In duis et in velit cillum magna amet commodo duis anim.
                </Text>
            </View>

            {/* cast */}
            <Cast navigation={navigation} cast={cast} />

            {/* similar movies */}
            <MovieList title="Similar movies" data={similarMovies} hideSeeAll />
        </ScrollView>
    )
}