import { View, ScrollView, Image } from 'react-native'
import { FC, useState } from 'react'
import {
    Entypo,
    FontAwesome,
    Fontisto,
    Ionicons,
    SimpleLineIcons,    
} from '@expo/vector-icons'
import { useColors } from '@/shared/libs/hooks'
import { LinearGradient } from 'expo-linear-gradient'
import { styles } from '../styles'
import { Button, Input, Text } from '@/shared/ui'
import { validatePassword } from '../libs/utils'
import { cn } from '@/shared/libs/utils'
import { Link, router } from 'expo-router'
import { paths } from '@/shared/config/routes'
import { ActivityIndicator } from 'react-native'

interface IProps {}

const LoginScreen: FC<IProps> = ({}) => {
    const [required, setRequired] = useState('')
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [buttonSpinner, setButtonSpinner] = useState(false)
    const [userInfo, setUserInfo] = useState({
        emailOrUserName: '',
        password: ''
    })
    const [error, setError] = useState({
        password: ''
    })
    const { gradients, icon, text } = useColors()


    const handlePasswordValidation = ( value: string ) => {
        const password = value

        const errorMessage = validatePassword(password);

        if (errorMessage) {
            setError({ ...error, password: errorMessage });
            setUserInfo({ ...userInfo, password: '' });
        } else {
            setError({ ...error, password: '' });
            setUserInfo({ ...userInfo, password: value });
        }
    }

    const handleSignIn = () => {
        console.log("SIGN IN")
    }

    return ( 
        <LinearGradient
            colors={gradients.login}
            className='flex-1 items-center justify-center'
        >
            <ScrollView className='w-full pt-5'>
                <Image
                    source={require('@/shared/assets/sign-in/sign_in.png')}
                    style={styles.signInImage}
                />

                <Text className='text-center text-2xl font-raleway-bold'>Welcome Back!</Text>
                <Text className='text-center text-base font-raleway text-font-description'>
                    Login to your existing account of Becodemy
                </Text>

                <View className='mx-4 mt-[30px] px-3' >
                    <View className='flex-row items-center relative'>
                        <Input
                            keyboardType='email-address'
                            placeholder='support@becoodemy.com'
                            className='h-14 pl-[52px] w-full'
                            value={userInfo.emailOrUserName}
                            onChangeText={(value) => setUserInfo({ ...userInfo, emailOrUserName: value })}
                        />
                        <Fontisto
                            className='absolute left-4 top-[15.5px]'
                            name='email'
                            size={20}
                            color={icon.default}
                        />
                        {
                            required && (
                                <View className='flex-row items-center mx-16px absolute right-4'>
                                    <Entypo name='cross' size={18} color='red' />
                                </View>
                            )
                        }
                    </View>
                    <View className='flex-row items-center mt-4 relative'>
                        <Input
                            keyboardType='default'
                            className='h-14 pl-[52px] w-full'
                            secureTextEntry={!isPasswordVisible}
                            defaultValue=''
                            placeholder='********'
                            onChangeText={handlePasswordValidation}
                        />
                        <SimpleLineIcons
                            className='absolute left-4'
                            name='lock'
                            size={20}
                            color={icon.default}
                        />

                        <Button
                            className='absolute right-4'
                            size='only-icon'
                            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                        >
                            <Ionicons
                                name={isPasswordVisible ? "eye-off-outline" : "eye-outline"}
                                size={23}
                                color={icon.secondary}
                            />
                        </Button>
                    </View>
                    
                    <Link
                        href={paths.forgotPassword()}
                        className='mx-4 text-right text-base mt-3'
                    >
                        <Text className='font-nunito-bold'>Forgot Password?</Text>
                    </Link>                    
                    
                    {
                        error.password && (
                            <View className='flex-row items-center mx-3 absolute top-[125px]'>
                                <Entypo name='cross' size={18} color='red' />
                                <Text className={cn(text.error, 'text-[10px]')}>{error.password}</Text>
                            </View>
                        )
                    
                    }
                    <Button
                        variant='primary'
                        className='mt-5'
                        onPress={handleSignIn}
                    >
                        {
                            buttonSpinner ? (
                                <ActivityIndicator size='small' color="white" />
                            ): (
                                <Text className='font-nunito'>Sing In</Text>
                            )
                        }
                    </Button>

                    <View className='flex-row items-center justify-center mt-5 gap-4'>
                        <Button size='base' onPress={() =>  console.log('GOOGLE')}>
                            <FontAwesome name='google' size={30} />
                        </Button>
                        <Button size='base' onPress={() =>  console.log('GITHUB')} >
                            <FontAwesome name='github' size={30} />
                        </Button>
                    </View>

                    <View className='flex-row justify-center my-5' >
                        <Text className='font-raleway-bold'>Don't have an account?</Text>
                        <Link
                            href={paths.signup()}
                            className='mx-4 ml-1 mt-[2px]'
                        >
                            <Text className='font-nunito-bold text-primary'>Sing Up</Text>
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </LinearGradient>
    )
}

export default LoginScreen