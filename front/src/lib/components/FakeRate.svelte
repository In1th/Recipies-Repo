<script>
    import { faker } from "@faker-js/faker";
    import { Star } from "lucide-svelte";
</script>

<din class="flex gap-1">
    <Star/>
    <p>{faker.number.float({min: 1.0, max: 5.0, fractionDigits: 2})}</p>
</din>