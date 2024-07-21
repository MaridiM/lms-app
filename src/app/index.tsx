
import { paths } from '@/shared/config/routes'
import { Redirect } from 'expo-router'
import { FC } from 'react'

const App: FC  = () => <Redirect href={paths.onboarding()} />

export default App