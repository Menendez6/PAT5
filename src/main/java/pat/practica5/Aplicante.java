package pat.practica5;

public class Aplicante {

    private String name;
    private String surname;
    private String email;
    private String address;
    private String country;
    private String city;
    private int zip;
    private String cv;
    
    public Aplicante(String name, String surname, String address, String email, String country, String city,
            int zip, String cv) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.address = address;
        this.country = country;
        this.city = city;
        this.zip = zip;
        this.cv = cv;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public int getZip() {
        return zip;
    }

    public void setZip(int zip) {
        this.zip = zip;
    }

    public String getCv() {
        return cv;
    }

    public void setCv(String cv) {
        this.cv = cv;
    }

    @Override
    public String toString() {
        return "Aplicante [address=" + address + ", country=" + country + ", email=" + email + ", name=" + name
                + ", surname=" + surname + ", city=" + city + ", cv=" + cv + ", zip=" + zip + "]";
    }

    
}
