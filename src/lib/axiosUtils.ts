import axios, { AxiosResponse, AxiosInstance } from "axios";
import * as schemaHelper from "@/lib/schemaHelper";
import type { AxiosRequestConfig } from "axios";

const client: AxiosInstance = axios.create({
	baseURL: 'http://localhost:3080',
	headers: { 'Content-Type': 'application/json' },
	timeout: 5000, // milliseconds
});

export type AxiosConfigWrapper<
	Path extends schemaHelper.UrlPaths,
	Method extends schemaHelper.HttpMethods
> = {
	url: Path;
	method: Method & schemaHelper.HttpMethodsFilteredByPath<Path>;
	params?: schemaHelper.RequestParameters<Path, Method>;
	paths?: schemaHelper.RequestUrlPaths<Path, Method>;
	data?: schemaHelper.RequestData<Path, Method>;
};

export function request<
	Path extends schemaHelper.UrlPaths,
	Method extends schemaHelper.HttpMethods
>(config: AxiosConfigWrapper<Path, Method>) {
	const { url, paths, ...baseConfig } = config;
	const requestConfig: AxiosRequestConfig = {
		...baseConfig,
		url: Object.entries(paths ?? {}).reduce(
			(previous, [key, value]) =>
				previous.replace(new RegExp(`\\{${key}\\}`), String(value)),
			url as string,
		),
	};

	return client.request<
		schemaHelper.ResponseData<Path, Method>,
		AxiosResponse<schemaHelper.ResponseData<Path, Method>>,
		AxiosConfigWrapper<Path, Method>["data"]
	>(requestConfig);
}
