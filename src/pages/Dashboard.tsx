import { useEffect, useState } from 'react';
import { FaEthereum, FaRegCopy } from 'react-icons/fa';

import { Table, Layout, Input } from '../components';
import { getPools } from '../api';
import { IPoolData } from '../interfaces';

export default function Dashabord() {
    const [exchangeData, setData] = useState<IPoolData[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchPools = async () => {
        try {
            const {
                data: { data },
            } = await getPools();

            setData(data);
        } catch (e: unknown) {
            if (e instanceof Error) alert(e.message);
            console.log('Error', e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPools();
    }, []);

    return (
        <Layout>
            <main className="bg-[#F8F8F8] h-full px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mt-3">
                    <h1 className="text-xl font-semibold text-gray-900">Immuna Monitor Portal</h1>
                    <div className="mt-3 flex flex-col md:flex-row items-baseline items-start lg:items-center justify-between">
                        <Input placeholder="Search..." search />
                        <div className="flex ml-0 md:ml-3 mt-3 md:mt-0">
                            <div className="bg-blue-100 rounded-full">
                                <div className="flex items-center mx-1">
                                    <FaEthereum className="bg-blue-100" color="#6C6C6C" />{' '}
                                    <p>ETH</p>
                                    <div className="bg-blue-200 rounded-full ml-2 -mr-1 px-4 py-2">
                                        0xBAD7...E116
                                    </div>
                                </div>
                            </div>
                            <div className="bg-blue-200 hover:bg-blue-100 rounded-full w-10 ml-2 flex items-center justify-center cursor-pointer">
                                <FaRegCopy color="#6C6C6C" />
                            </div>
                        </div>
                    </div>
                </div>
                <Table data={exchangeData} loading={loading} />
            </main>
        </Layout>
    );
}
