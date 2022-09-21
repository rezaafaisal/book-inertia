<template>
    <div class="mt-5">
        <div class="row">
            <div class="col-12">
                <div class="bg-white p-4 rounded-3 border-0">
                    <div class="d-block mb-3 text-end"><button data-bs-toggle="modal" data-bs-target="#add" class="btn btn-sm btn-success" @click="addData">Tambah</button></div>
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Judul Buku</th>
                                <th>Penulis</th>
                                <th>Stok</th>
                                <th>Harga</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="book in books" :key="book.id">
                                <td>1</td>
                                <td>{{ book.title }}</td>
                                <td>{{ book.author }}</td>
                                <td>{{ book.stock }}</td>
                                <td>${{ book.price }}</td>
                                <td>
                                    <div class="d-flex gap-2">
                                        <button class="btn btn-sm btn-primary">Edit</button>
                                        <button class="btn btn-sm btn-danger">Hapus</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!-- modal -->
    <div class="modal fade" id="add" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Tambah Data</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="submit">
                        <div class="mb-3">
                            <label for="title" class="form-label">Judul Buku</label>
                            <input class="form-control" type="text" id="title" v-model="title">
                        </div>
                        <div class="mb-3">
                            <label for="author" class="form-label">Penulis</label>
                            <input class="form-control" type="text" id="author" v-model="author">
                        </div>
                        <div class="mb-3">
                            <label for="stock" class="form-label">Stok</label>
                            <input class="form-control" type="number" id="stock" v-model="stock">
                        </div>
                        <div class="mb-3">
                            <label for="price" class="form-label">Harga</label>
                            <input class="form-control" type="number" id="price" v-model="price">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-sm btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import Layout from "../Shared/Layout.vue"
    
</script>

<script>
    import { reactive } from "vue";
    import { Inertia } from "@inertiajs/inertia";
    
    export default {
        layout: Layout,
        props: {
            books: Array
        },

        setup(){
            const form = reactive({
                title: null,
                author: null,
                stock: null,
                proce: null,
            })

            function submit(){
                Inertia.post("{{ route('add_data') }}", form)
            }

            return {form, submit}
        }

    }

</script>