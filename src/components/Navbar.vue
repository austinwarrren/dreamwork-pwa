<template>
    <b-navbar toggleable="lg" type="light" variant="light">
        <b-navbar-brand href="#">Dreamwork</b-navbar-brand>
        <b-navbar-toggle target="nav_collapse" />
        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav>
                <b-nav-item href="#" data-test="logNavButton">Log</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style>
</style>
