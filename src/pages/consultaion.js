import AskGpt from '@/components/Consultations/AI/AskChatGpt'
import AskGpt from '@/components/Consultations/AI/ResponseGpt'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import { useAuth } from '@/hooks/auth'

const Consultation = () => {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Consultation
                </h2>
            }>
            <Head>
                <title>Laravel - Consultation</title>
            </Head>

            <div>
                <AskGpt />
                <ResponseGpt />
            </div>
        </AppLayout>
    )
}

export default Consultation
