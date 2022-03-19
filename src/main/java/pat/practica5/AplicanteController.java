package pat.practica5;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AplicanteController {

    ObjectMapper mapeador = new ObjectMapper();

    @Autowired
	ResourceLoader resourceLoader;

    private static final String FILE_NAME = "aplicantes.json";
    
    ArrayList<Aplicante> aplicantes = new ArrayList<Aplicante>();
    //ArrayList<Aplicante> aplicantes = mapeador.readValue("./src/main/resources/" + FILE_NAME, new TypeReference<ArrayList<Aplicante>>(){});

    /*@GetMapping("api/aplicant")
    public @ResponseBody ResponseEntity<String> getAplicante(){
        return ResponseEntity.ok().body(aplicantes.toString());
    }*/

    @GetMapping("api/aplicant")
    public ResponseEntity<Object> getSwagger() {
        Resource resource=resourceLoader.getResource(
                 "classpath:"+FILE_NAME);
       return new ResponseEntity<>(resource, HttpStatus.OK);
   }


    @PostMapping("api/aplicant")
    public @ResponseBody ResponseEntity<String> postAplicante(@RequestBody Aplicante aplicante){

        try{

        aplicantes.add(aplicante);
        mapeador.writeValue(new File("./src/main/resources/" + FILE_NAME),aplicantes);

        }catch (IOException e){
            e.printStackTrace();
            System.out.println(e);
        }

        return ResponseEntity.ok().body("Aplicante incluido");
    }
    
}
