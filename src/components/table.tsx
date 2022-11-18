import { useState, useEffect } from 'react';
import { FaExternalLinkAlt, FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Dropdown, SortIndicator } from './utils';
import {
  IPoolData,
  IPagination,
  IPageIndexs,
  IPaginateButton,
} from '../interfaces';

const pageOptions: number[] = [10, 20, 30, 40, 50];

export default function Table({ data }: { data: IPoolData[] }) {
  const [pageSize, setPageSize] = useState<number>(pageOptions[0]);
  const [displayData, setDisplayData] = useState(data.slice(0, 10));
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setDisplayData(data.slice(0, 10));
  }, [data]);

  useEffect(() => {
    setCurrentPage(1);
    setDisplayData(data.slice(0, pageSize));
  }, [pageSize]);

  const handlePageChange = (newPage: number) => {
    console.log(newPage, data.length, pageSize, data.length / pageSize);

    if (newPage < 1 || newPage > Math.round(data.length / pageSize)) return;

    setDisplayData(
      data.slice((newPage - 1) * pageSize, (newPage - 1) * pageSize + pageSize)
    );
    setCurrentPage(newPage);
  };

  return (
    <div className="mt-8 flex flex-col">
      <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-blue-100">
                <tr>
                  <th
                    scope="col"
                    className="flex items-center py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    Chain
                    <SortIndicator sortDirection="none" />
                  </th>
                  <th
                    scope="col"
                    className=" px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    <div className="flex items-center">
                      Pool
                      <SortIndicator sortDirection="up" />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className=" px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    <div className="flex items-center">
                      Project
                      <SortIndicator sortDirection="none" />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    <div className="flex items-center">
                      total value locked (USD)
                      <SortIndicator sortDirection="down" />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    <div className="flex items-center">
                      Risk Status
                      <SortIndicator sortDirection="none" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {displayData.map((item, index: number) => (
                  <tr
                    key={item.pool}
                    className={index % 2 === 0 ? undefined : 'bg-[#F4F9FF]'}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                      <div className="flex items-center font-medium text-gray-900">
                        {item.chain}{' '}
                        <FaExternalLinkAlt className="ml-2" size={10} />
                      </div>
                    </td>

                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <div className="flex items-center text-gray-900">
                        {item.pool.slice(0, 7)}...
                        {item.pool.slice(
                          item.pool.length - 6,
                          item.pool.length - 1
                        )}{' '}
                        <FaExternalLinkAlt className="ml-2" size={10} />
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <div className="flex items-center text-gray-900">
                        {item.project} ({item.symbol})
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {item.tvlUsd}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <span
                        className={`inline-flex rounded-full flex items-center justify-center w-14 h-6 capitalize   ${
                          item.ilRisk === 'yes' ? 'bg-green-100' : 'bg-red-100'
                        } px-2 text-xs font-semibold leading-5 text-green-800`}>
                        {item.ilRisk}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <div className="flex items-center mb-4 ">
          Show{' '}
          <Dropdown
            dropdownData={pageOptions}
            selected={pageSize}
            onChange={setPageSize}
          />{' '}
          results of {data.length} entries
        </div>
        <div className=" flex items-center mb-4 ">
          <Pagination
            totalPages={Math.round(data.length / pageSize)}
            currentPage={currentPage}
            PageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}

const Pagination = ({ totalPages, currentPage, PageChange }: IPagination) => (
  <div className="flex mx-2 bg-white px-4 py-2 rounded-lg">
    <PageButton onClick={() => PageChange(currentPage - 1)}>
      <FaAngleLeft />
    </PageButton>
    {totalPages < 6 &&
      [...new Array(totalPages)].map((_, item) => (
        <PageButton onClick={() => PageChange(++item)} key={item}>
          {++item}
        </PageButton>
      ))}
    {totalPages > 6 && (
      <>
        {getTwoIndexes({ currentPage, totalPages }).map((item) => (
          <PageButton onClick={() => PageChange(item)} key={item}>
            {item}
          </PageButton>
        ))}
        {getTwoIndexes({ currentPage, totalPages, isNext: true }).length > 0 &&
          '...'}
        {getTwoIndexes({ currentPage, totalPages, isNext: true }).map(
          (item) => (
            <PageButton onClick={() => PageChange(item)} key={item}>
              {item}
            </PageButton>
          )
        )}
      </>
    )}
    <PageButton onClick={() => PageChange(currentPage + 1)}>
      <FaAngleRight />
    </PageButton>
  </div>
);

const getTwoIndexes = ({
  currentPage,
  totalPages,
  isNext = false,
}: IPageIndexs): number[] => {
  if (isNext) {
    if (currentPage + 2 <= totalPages)
      return [currentPage + 1, currentPage + 2];
    else if (currentPage + 1 <= totalPages) return [currentPage + 1];
    else return [];
  }

  if (currentPage - 2 > 0)
    return [currentPage - 2, currentPage - 1, currentPage];
  else if (currentPage - 1 > 0) return [currentPage - 1, currentPage];
  else return [currentPage];
};

const PageButton = ({ children, onClick }: IPaginateButton) => (
  <div
    className="bg-gray-100 px-3 rounded-md py-2 mx-1 flex items-center cursor-pointer"
    onClick={onClick}>
    {children}
  </div>
);
