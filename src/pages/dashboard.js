import AppointmentList from '@/components/Appointments/AppointmentList'
import AskGpt from '@/components/Consultations/AI/AskChatGpt'
import ResponseGpt from '@/components/Consultations/AI/ResponseGpt'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import { useAuth } from '@/hooks/auth'

const Dashboard = () => {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }>
            <Head>
                <title>Laravel - Dashboard</title>
            </Head>

            <div className="py-12">
                <AppointmentList user={user} />
            </div>

            {/* <div>
                <AskGpt />
                <ResponseGpt />
            </div> */}
        </AppLayout>
    )
}

export default Dashboard
