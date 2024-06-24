import { View, Image, Text, Dimensions, Platform, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
import { HeartIcon } from 'react-native-heroicons/solid';
import { styles } from '../theme';
import { useState } from 'react';
import MovieList from '../components/MovieList';


const { width, height } = Dimensions.get('window');
const ios = Platform.OS === "ios";
const verticalMargin = ios ? '' : 'my-3';


export default function PersonScreen() {
    const navigation = useNavigation();
    const [isFavourite, toggleFavourite] = useState(false);
    const [personMovies, setPersonMovies] = useState([1, 2, 3, 4, 5]);

    return (
        <ScrollView className="flex-1 bg-neutral-900" contentContainerStyle={{ paddingBottom: 20, paddingTop: 40 }}>
            {/* back button and movie poster */}

            <SafeAreaView className={'z-30 flex w-full flex-row justify-between items-center px-2 mx-2' + verticalMargin}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.background} className="rounded-xl p-1 z-50">
                    <ChevronLeftIcon size={28} strokeWidth={2.5} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
                    <HeartIcon size={35} color={isFavourite ? 'red' : 'white'} />
                </TouchableOpacity>
            </SafeAreaView>

            {/* person details */}
            <View>
                <View className="flex-row justify-center mt-4" style={{
                    shadowColor: 'gray',
                    shadowRadius: 40,
                    shadowOffset: { width: 0, height: 5 },
                    shadowOpacity: 1
                }}>
                    <View className="items-center rounded-full overflow-hidden h-72 w-72 border-neutral-500 border-2">
                        <Image
                            source={require('../assets/images/moviePoster1.jpg')}
                            style={{ height: height * 0.43, width: width * 0.74 }}
                        />
                    </View>
                </View>
                <View className="mt-6">
                    <Text className="text-3xl text-white font-bold text-center">
                        Keanu Reeves
                    </Text>
                    <Text className="text-base text-neutral-500 text-center">
                        London, United Kingdon
                    </Text>
                </View>
                <View className="mx-3 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full p-4">
                    <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                        <Text className="text-white font-semibold">Gender</Text>
                        <Text className="text-neutral-300 text-sm">Male</Text>
                    </View>
                    <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                        <Text className="text-white font-semibold">Birthday</Text>
                        <Text className="text-neutral-300 text-sm">1964-01-23</Text>
                    </View>
                    <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                        <Text className="text-white font-semibold">Known for</Text>
                        <Text className="text-neutral-300 text-sm">Acting</Text>
                    </View>
                    <View className="px-2 items-center">
                        <Text className="text-white font-semibold">Popularity</Text>
                        <Text className="text-neutral-300 text-sm">64.23</Text>
                    </View>
                </View>
                {/* biography */}
                <View className="my-6 space-y-2">
                    <Text className="text-white text-lg">Biography</Text>
                    <Text className="text-neutral-400 tracking-wide">
                        Fugiat ea ullamco et ullamco culpa in occaecat mollit incididunt do ullamco adipisicing.
                        Velit deserunt proident in incididunt laboris pariatur aute amet et occaecat.
                        In labore amet labore ipsum tempor minim laboris nulla sint amet nisi. Excepteur consequat ipsum veniam
                        consequat in ex deserunt id labore. Lorem incididunt do adipisicing sunt.

                        Excepteur non aute do eu aute ea nulla. Est aliquip minim enim incididunt. Labore veniam culpa
                        Lorem labore ut ex aliquip Lorem laborum fugiat nisi enim voluptate consectetur.
                    </Text>
                </View>

                {/* movies list */}
                <MovieList title="Movies" data={personMovies} hideSeeAll />
            </View>
        </ScrollView>
    )
}