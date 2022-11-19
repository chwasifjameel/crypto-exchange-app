import { ReactNode, MouseEvent, ChangeEvent } from 'react';

interface ISortDirection {
  sortDirection: 'up' | 'down' | 'none';
}

interface ISearchInput {
  placeholder?: string;
  search?: boolean;
}

interface IPoolData {
  apy: number;
  apyBase: number;
  apyPct1D: number;
  apyPct7D: number;
  apyPct30D: number;
  apyReward?: any;
  chain: string;
  count: number;
  exposure: string;
  ilRisk: string;
  mu: number;
  outlier: boolean;
  pool: string;
  poolMeta: any;
  predictions?: Object;
  project: string;
  rewardTokens?: any;
  sigma: number;
  stablecoin: boolean;
  symbol: string;
  tvlUsd: number;
  underlyingTokens: null;
}

interface IPoolTable {
  loading: boolean;
  data: IPoolData[];
}

interface IPagination {
  totalPages: number;
  currentPage: number;
  PageChange(name: number): void;
}

interface IPageIndexs {
  currentPage: number;
  totalPages: number;
  isNext?: boolean;
}
interface IPaginateButton {
  children: ReactNode;
  onClick(event: MouseEvent): any;
}
interface IDropdown {
  dropdownData: number[];
  selected: number;
  onChange(event: number): any;
}

interface INavbar {
  setSidebarOpen(event: boolean): any;
}
interface ISidebar extends INavbar {
  sidebarOpen: boolean;
}

export type {
  ISortDirection,
  ISearchInput,
  IPoolData,
  IPagination,
  IPageIndexs,
  IPaginateButton,
  IDropdown,
  INavbar,
  ISidebar,
  IPoolTable,
};
