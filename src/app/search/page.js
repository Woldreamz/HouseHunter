import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Input from "@/components/Input";
import "@/app/global.css";
import stlyes from "@/app/search/search.module.css"


export default function SearchPage() {
    return (
        <>
            <Header />
            <div class="input-group mb-3" className={stlyes.searchDiv}>
                <input class="form-control ps-5" type="search" id="prsearch" name="prsearch" placeholder="Search for your desired property.." aria-describedby="addon-wrapping"/>
                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Area</button>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li><a class="dropdown-item" style={{color: "black"}} href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                  <li><a class="dropdown-item" href="#">Separated link</a></li>
                </ul>

            </div>
            <Footer/>
        </>
    );
}