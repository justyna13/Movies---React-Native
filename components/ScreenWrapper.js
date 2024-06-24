import { StatusBar } from 'expo-status-bar'
import { Platform, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { styles } from '../theme';
import { useState } from 'react';
import { TrendingMovies } from './TrendingMovies';

const ios = Platform.OS === 'ios';

export default function ScreenWrapper() {
  const [trending, setTrending] = useState([1, 2, 3]);

  return (
    <View className="mt-10 bg-neutral-800 flex-1">
      <SafeAreaView className={ios ? '-mb-2' : 'mb-3'}>
        <StatusBar style='light' />
        <View className="flex-row justify-between items-center mx-4">
          <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />
          <Text className="text-white text-3xl font-bold">
            <Text style={styles.text}>M</Text>ovies
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView
       showsVerticalScrollIndicator={false}
       contentContainerStyle={{ paddingBottom: 10 }}
       >
        {/* Trending movies carousel */}
        <TrendingMovies data={trending} />
      </ScrollView>
    </View>
  )
}