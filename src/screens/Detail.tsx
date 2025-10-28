import { TRouteProps } from "@/Routes";
import { useRoute } from "@react-navigation/native";
import { Text } from "react-native";

export function DetailPage() {

    const { params } = useRoute<TRouteProps<'detail'>>();

    return (
        <>
            <Text>Detail {params.rate}</Text>
        </>
    );
}