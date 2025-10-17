import { useQuery } from "@tanstack/react-query";


export function useFetchData(key,url){
    const {data:products, isLoading} = useQuery({
        queryKey:[key],
        queryFn: async () => {
            const res = await fetch(url);
            if (!res.ok) return new Error("Failed to check products");
                    return res.json()
        },
       
    })
const isFeatured = products?.filter((p) => p.isFeatured)
    return {isFeatured,products,isLoading}
}