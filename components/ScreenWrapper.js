import { View } from 'react-native'

export default function ScreenWrapper({children}) {
  return (
    <View className="mt-10 bg-blue-300 flex-1 justify-center items-center">
      {children}
    </View>
  )
}